import requests
from bs4 import BeautifulSoup

url = "http://localhost:3000/"

response = requests.get(url)

if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')

    # Find all divs that contain links
    divs_with_links = soup.find_all('div', class_='your_div_class')  # Replace 'your_div_class' with the actual class of your divs

    # Print details of each link within the divs
    for div in divs_with_links:
        links = div.find_all('a')
        for link in links:
            print(link.get('href'))
else:
    print(f'Error: {response.status_code}')
