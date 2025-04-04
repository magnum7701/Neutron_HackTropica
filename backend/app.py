from flask import Flask,request, jsonify
from yt_transcript import yt_ts
from gemini_api import gemini_api
from flask_cors import CORS
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

app.run(debug=True, port=8000)