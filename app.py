import requests

# URL da API que você quer acessar
url = ''

# Faz a requisição GET para a API
response = requests.get(url)

# Verifica se a requisição foi bem-sucedida (código de resposta 200)
if response.status_code == 200:
    data = response.json()
    print(data)
else:
    # Mostra uma mensagem de erro caso a requisição não seja bem-sucedida
    print('Erro ao fazer a requisição:', response.status_code)