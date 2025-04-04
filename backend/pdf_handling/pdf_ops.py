import os
from pathlib import Path
from byaldi import RAGMultiModalModel
import os
from pdf2image import convert_from_path
from PIL import Image
import io

model = RAGMultiModalModel.from_pretrained("vidore/colqwen2-v0.1")

index_name = 'ParsedData'

path='file/path/'
var = 0
for filename in os.listdir(path):
    if var==0:
        model.index(input_path=Path(os.path.join(path, filename)), #Only index the first file
                    index_name = index_name,
                    store_collection_with_index=True,
                    overwrite=True
                    )
        var=1
    else: #files after the first will be added to index
        model.add_to_index(input_item=Path(os.path.join(path, filename)),
                  store_collection_with_index=True,
                  )
    

#read pdfs as images
images = convert_from_path("/content/Filters Analog.pdf")

arr = []
for filename in os.listdir(path):
    images = convert_from_path(os.path.join(path, filename))
    rgb_images = [image.convert("RGB") for image in images]
    arr.append(rgb_images)
    # Convert all elements of images to image bytes
    image_bytes_arr = []
    for pdf_image_list in arr:
        pdf_bytes_list = []
        for image in pdf_image_list:
            buffer = io.BytesIO()
            image.save(buffer, format="PNG")  # You can choose other formats like JPEG
            image_bytes = buffer.getvalue()
            pdf_bytes_list.append(image_bytes)
        image_bytes_arr.append(pdf_bytes_list)




import google.generativeai as genai
genai.configure(api_key=os.environ["GEMINI_API_KEY"])

# Create the model
generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 40,
  "max_output_tokens": 8192,
  "response_mime_type": "text/plain",
}

chat_model = genai.GenerativeModel(
  model_name="gemini-1.5-flash-8b",
  generation_config=generation_config,
  system_instruction="You will be given an image, and a question. Your task is to recognize the content of the image and answer the question. If you cannot find the answer, say 'I don't know' or not enough information",
)

chat_session = chat_model.start_chat(
  history=[
  ]
)

query='What is Series inductor filter'

def query_to_ans(query):
  results = model.search(query=query, k=1)

  for result in results:
   print(f'''Doc_id: {result.doc_id}
              Page: {result.page_num}
              Score: {result.score}
          ''')
   contents = [
    {
        'parts': [
            {'text': f"Answer with reference to the image: {query}"},
            {'inline_data': {'mime_type': 'image/jpeg', 'data': image_bytes_arr[results[0].doc_id][results[0].page_num]}}
        ]
    }
]

# Generate content
  response = chat_model.generate_content(contents)
  print(response.text)