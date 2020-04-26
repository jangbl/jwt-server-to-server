# JWT server to server communication in Node.js

## About

This repository is the source code for the [JWT server to server communication in Node.js tutorial series on Youtube](https://www.youtube.com/watch?v=OGWWP8yfLk4&list=PL1Nml43UBm6dge_ykMszBCtaSJ9RnxQNJ&index=5) on YouTube provided by [productioncoder.com](https://productioncoder.com).

<h3 align="center">Please help this repo with a ⭐️ if you find it useful! 😁</h3>

[![JWT server to server communication](images/jwt-server-to-server.png)](https://www.youtube.com/watch?v=OGWWP8yfLk4&list=PL1Nml43UBm6dge_ykMszBCtaSJ9RnxQNJ&index=5)

For updates, please follow [@productioncoder](https://twitter.com/productioncoder) on Twitter.

## 2 How to run this application

### 2.1 Install dependencies

Install the dependencies by running

```
npm install
```

### 2.2 Spin up two servers

For this project to work, you need to spin up two server so they can talk to each other

We recommend opening two terminal windows for this. In the first terminal run

```
npm run serverA
```

In the second terminal window run:

```
npm run serverB
```

You now have two servers running on port `3000` and on port `8080`.

### 2.3. Let the servers talk to each other

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

We do this, so the tutorial is easier to understand. In a _production scenario you need to use a secure protocol such as `https` / `TLS` to ensure a secure communication.
