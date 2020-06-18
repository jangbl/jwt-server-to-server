# JWT server to server communication in Node.js

## About

This repository is the source code for the [JWT server to server communication in Node.js tutorial series on Youtube](https://www.youtube.com/playlist?list=PL1Nml43UBm6dge_ykMszBCtaSJ9RnxQNJ) on YouTube provided by [productioncoder.com](https://productioncoder.com).

<h3 align="center">Please help this repo with a ⭐️ if you find it useful! 😁</h3>

[![JWT server to server communication](images/jwt-server-to-server.png)](https://www.youtube.com/playlist?list=PL1Nml43UBm6dge_ykMszBCtaSJ9RnxQNJ)

For updates, please follow [@productioncoder](https://twitter.com/productioncoder) on Twitter.

## 2 How to run this application

### 2.1 Install dependencies

Install the dependencies by running

```
npm install
```

### 2.2 HMAC communication

To initiate an HMAC server to server communication, you need to spin up two server so they can talk to each other

We recommend opening two terminal windows for this. In the first terminal run

```
npm run serverA
```

In the second terminal window run:

```
npm run serverB
```

You now have two servers running on port `3000` and on port `8080`.

### 2.3. RSA-based server to server communication

Make sure that you create two RSA keypairs and paste it in the root directory with the following file names

```
serverA-private.key
serverA-public.key
serverB-private.key
serverB-public.key
```

If you do not want to generate an RSA keypair with openssl via the command line, you can use an online service like [jsencrypt](https://travistidwell.com/jsencrypt/demo/index.html) if you just want to try out the project locally.

### 2.4. Let the servers talk to each other

To let one server send a message to the other server, you can hit the following unprotected `REST` endpoint with curl or with Postman:

```
POST localhost:8080/produce
```

Note that both servers support the `POST /produce` endpoint. Therfore, you can also hit

```
POST localhost:3000/produce
```

Both servers will not print log messages that indicate that they just exchanged information with `JWT` tokens in the header.

### 3 Security

To make this communcation truly secure, we would need to make use of a secure transport protocol such as `https`.

Since this is a tutorial and we did not want to complicate it further by using self-signed certificates, we just use `http` for the sake of simplicity.

We do this, so the tutorial is easier to understand. In a \_production scenario you need to use a secure protocol such as `https` / `TLS` to ensure a secure communication.
