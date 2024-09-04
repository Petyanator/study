import socketserver # allow python to listen to ports, and get rests from the web/elsewhere
import http.server # allows python to serve HTTP requests(Apache,Nginx, etc.)
import urllib.parse # manipulate URLS and query strings

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        path = urllib.parse.urlparse(self.path).path

        if path == '/':
            self.send_response(200)
            self.send_header("Content-type", "text/html")
            self.end_headers()

            with open('index.html', 'rb') as file:
                self.wfile.write(file.read())
                

            # self.wfile.write(
            #     b"<html><body><h1>Hello</h1></body></html>"
            # )
        elif path == '/about':
            self.send_response(200)
            self.send_header("Content-type", "text/html")
            self.end_headers()
            with open('about.html', 'rb') as file:
                self.wfile.write(file.read())

            # self.wfile.write(
            #     b"<html><body><h1>About Page</h1>"
            #     b"<p>This is the about page</p>"
            #     b'<p><a href="/">Go to Home Page</a></p>'  # Anchor Tag
            #     b"</body></html>"
            # )
        elif '/styles.css':
            self.send_response(200)
            self.send_header("Content-type", "text/css")
            self.end_headers()
            with open('styles.css', 'rb') as file:
                self.wfile.write(file.read())
        else:
            self.send_error(404)
        
if __name__ == "__main__":
    server_address = ("localhost", 8080)
    httpd = socketserver.TCPServer(server_address, MyHandler)
    print(f"Server running at http://{server_address[0]}:{server_address[1]}")
    httpd.serve_forever() #     keep the server running
