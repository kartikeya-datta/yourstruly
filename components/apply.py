import requests

# URL provided
url = "https://apply-to-avantos.dev-sandbox.workload.avantos-ai.net"


headers = {
    "Content-Type": "application/json",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36"
}

payload = {
    "email": "kartikeye@careeremail.net"
}

response = requests.post(url, headers=headers, json=payload)

print("Status Code:", response.status_code)
print("Response Body:", response.text)
