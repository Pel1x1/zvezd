import os
from PIL import Image

def convert_to_webp(image_path):
    try:
        img = Image.open(image_path).convert('RGB')
        output_path = os.path.splitext(image_path)[0] + '.webp'
        img.save(output_path, 'webp', quality=100)
        print(f"Файл {image_path} успешно конвертирован в {output_path}")
        return output_path
    except Exception as e:
        print(f"Ошибка при обработке файла {image_path}: {e}")
        return None

def process_images_in_folder(folder_path):
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                full_path = os.path.join(root, file)
                webp_path = convert_to_webp(full_path)
                if webp_path is not None:
                    try:
                        os.remove(full_path)
                        print(f"Файл {full_path} удалён")
                    except Exception as e:
                        print(f"Ошибка при удалении файла {full_path}: {e}")

if __name__ == '__main__':
    process_images_in_folder(os.getcwd())
    print("Все изображения обработаны, исходные удалены!")
