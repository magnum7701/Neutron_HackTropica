import os
from pathlib import Path
from byaldi import RAGMultiModalModel
import os
from pdf2image import convert_from_path
from PIL import Image
import io

model = RAGMultiModalModel.from_pretrained("vidore/colqwen2-v0.1")
index_name = 'ParsedData'
image_bytes_arr = []

def index_pdfs(path):
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
      

  arr = []
  for filename in os.listdir(path):
      images = convert_from_path(os.path.join(path, filename))
      rgb_images = [image.convert("RGB") for image in images]
      arr.append(rgb_images)
      # Convert all elements of images to image bytes
      
      for pdf_image_list in arr:
          pdf_bytes_list = []
          for image in pdf_image_list:
              buffer = io.BytesIO()
              image.save(buffer, format="PNG")  # You can choose other formats like JPEG
              image_bytes = buffer.getvalue()
              pdf_bytes_list.append(image_bytes)
          image_bytes_arr.append(pdf_bytes_list)

def retrieve_contents(query):
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
  return contents

