import socket

def get_local_ip():
    return socket.gethostbyname(socket.gethostname())

def get_public_ip():
    with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
        s.connect(("8.8.8.8", 80))
        return s.getsockname()[0]

local_ip = get_local_ip()
public_ip = get_public_ip()

print(f"Local IP address: {local_ip}")
print(f"Public IP address: {public_ip}")
