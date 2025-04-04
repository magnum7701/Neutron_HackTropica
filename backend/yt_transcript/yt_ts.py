from youtube_transcript_api import YouTubeTranscriptApi
ytt_api = YouTubeTranscriptApi()
def get_transcription(link):
    transcript=""
    try:
        if 'shorts' in link:
            video_id = link.split('shorts/')[1]
        else: 
            video_id = link.split('=')[1]
        fetched_transcript = ytt_api.fetch(video_id, languages=['en', 'hi'])
        for snippet in fetched_transcript:
            transcript+=snippet.text
        return transcript
    except Exception as e:
        print(e)
