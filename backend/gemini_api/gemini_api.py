import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()
genai.configure(api_key=os.environ["GEMINI_API_KEY"])

# Create the model
generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 40,
  "max_output_tokens": 8192,
  "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
  model_name="gemini-1.5-flash-8b",
  generation_config=generation_config,
  system_instruction="You are a helpful study guide. You will receive long text inputs, which can be any language, but you will respond in english only, unless asked otherwise. Your task is to summarize that text into 400 words or less. List the key topics as points. Do this, unless stated otherwise. If it is asked to explain a topic which is not included in the transcript, briefly respond that the requested content is not available.",
)

chat_session = model.start_chat(
  history=[
  ]
)

def get_summary(transcript, tips=""):
    prompt=f'''Can you pleaste summarize this Transcript: {transcript}. {tips}'''
    response = chat_session.send_message(prompt)
    return response.text