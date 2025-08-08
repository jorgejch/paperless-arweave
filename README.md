# Paperless-Arweave

A secure integration between [Paperless-ngx](https://docs.paperless-ngx.com/) and [Arweave](https://arweave.org/) for permanent, decentralized document storage.

## 📝 Overview

Paperless-Arweave extends Paperless-ngx by storing post-processed documents in the Arweave blockchain as permanent storage after they have been parsed. This web application runs alongside Paperless-ngx and leverages its REST API and post-consume hook functionality.

## 🛠️ Tech Stack

### Backend

- TypeScript with Express.js framework
- Integration with Paperless-ngx REST API

### Frontend
- TypeScript with React.js
- Document management interface
- Has an interface for viewing documents on Arweave and downloading them.
- Has an interface for viewing the Arweave transaction ID for a document.
- Has logic to fetch the user's public key from their wallet.
- Arweave Wander wallet.

## 🔒 Security Features

- Hybrid encryption approach for secure document storage
- Files are encrypted server-side using a unique AES-256 key per file
- The AES key is encrypted (wrapped) using the user’s Wander/Arweave wallet public key (RSA-OAEP)
- Both the wrapped AES key and the ciphertext are stored on Arweave
- Decryption requires the user’s private key in their wallet

## 🚀 Getting Started

### Prerequisites

- Node.js (v22+)
- Paperless-ngx instance running
- Arweave Wander wallet
- Docker and Docker Compose (for running alongside Paperless-ngx)

### Installation

1. Clone this repository:
```
git clone https://github.com/yourusername/paperless-arweave.git
cd paperless-arweave
```

1. Install dependencies:
```
npm install
```

1. Configure environment variables:
```
cp .env.example .env
```
Edit the `.env` file with your configuration details.

1. Start the development server:
```
npm run start:dev
```

1. Update your `docker-compose.override.yml` file to include:

```yaml
version: "3.3"
services:
  paperless:
    environment:
      - PAPERLESS_POST_CONSUME_SCRIPT=/usr/src/paperless/scripts/post-consume.sh
    volumes:
      - ./post-consume.sh:/usr/src/paperless/scripts/post-consume.sh:ro
```

1. Note that the system requires the user's wallet public key, which can be obtained via wallet connection or derived
   from an on-chain transaction.

1. Restart your Paperless-ngx container: `docker-compose restart paperless`

## 🏗️ Architecture

Paperless-Arweave consists of three main components:

1. **Post-Consume Script**: Triggers when Paperless-ngx finishes processing a document
2. **Backend API**: Handles document encryption and uploading to Arweave
3. **Frontend Interface**: Displays stored documents with their Arweave transaction IDs

## 🔐 Privacy Considerations

Since data on Arweave is publicly available by default, Paperless-Arweave implements robust encryption:

- Encryption happens server-side before uploading documents
- No symmetric keys are stored on the server; only the user’s public key and encrypted data are stored
- Only the intended wallet owner can decrypt the AES key and access document contents

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
