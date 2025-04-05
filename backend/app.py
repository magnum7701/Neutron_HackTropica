import os
from flask import Flask,request, jsonify
from yt_transcript import yt_ts
from gemini_api import gemini_api
from flask_cors import CORS
from pdf_handling import pdf_ops
app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/summarize_video", methods=["POST"])
def summarize_video():
    data = request.get_json()
    video_url = data.get("video_url")
    tips = data.get("tips")
    if (not tips):
        tips=""
    if not video_url:
        return jsonify({"error": "No video URL provided"}), 400
    else:
        transcript = yt_ts.get_transcription(video_url)
        if not transcript:
            return jsonify({"error": "Sorry, could not transcribe"}), 400
        else:
            summary = gemini_api.get_summary(transcript, tips)
            if not summary:
                return jsonify({"error": "Sorry, could not summarize"}), 400
            else:
                print(summary)
                return jsonify({"summary": summary}), 200
            
@app.route('/upload_pdf')
def upload_pdf():
    UPLOAD_FOLDER = 'uploaded_pdfs'
    if not os.path.exists(UPLOAD_FOLDER):
        os.makedirs(UPLOAD_FOLDER)
    app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
    #dump pdf files in folder
    pdf_files = request.files.getlist('pdf_files')
    for pdf_file in pdf_files:
        pdf_file.save(os.path.join(app.config['UPLOAD_FOLDER'], pdf_file.filename))
    #index pdf files
    pdf_ops.index_pdfs('UPLOAD_FOLDER')
    return 'PDFs uploaded and indexed successfully', 200

@app.route('/answer-questions', methods=['POST'])
def answer_questions():
    data = request.get_json()
    query = data.get('query')
    if not query:
        return jsonify({"error": "No query provided"}), 400
    else:
        contents = pdf_ops.retrieve_contents(query)
        response = gemini_api.get_ans_from_pdf(contents)
        return jsonify({"response": response}), 200


app.run(debug=True, port=8000)
