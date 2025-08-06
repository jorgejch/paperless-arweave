# Paperless-Arweave

A secure integration between [Paperless-ngx](https://docs.paperless-ngx.com/) and [Arweave](https://arweave.org/) for permanent, decentralized document storage.

## 📝 Overview

Paperless-Arweave extends Paperless-ngx by storing post-processed documents in the Arweave blockchain as permanent storage after they have been parsed. This web application runs alongside Paperless-ngx and leverages its REST API and post-consume hook functionality.

## 🛠️ Tech Stack

### Backend
- TypeScript with Nest.js framework
- Integration with Paperless-ngx REST API
- Arweave integration via [Irys](https://arweave-tools.irys.xyz/)

### Frontend
- TypeScript with React.js
- Document management interface

## 🔒 Security Features

- Client-side encryption using AES-256 before uploading to Arweave
- Secure key management for document encryption/decryption
- All data on Arweave is encrypted by default

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- Paperless-ngx instance running
- Arweave wallet
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
      - ARWEAVE_ENCRYPTION_KEY=your-super-secret-encryption-key-goes-here
    volumes:
      - ./post-consume.sh:/usr/src/paperless/scripts/post-consume.sh:ro
```

1. Restart your Paperless-ngx container: `docker-compose restart paperless`

## 🏗️ Architecture

Paperless-Arweave consists of three main components:

1. **Post-Consume Script**: Triggers when Paperless-ngx finishes processing a document
2. **Backend API**: Handles document encryption and uploading to Arweave
3. **Frontend Interface**: Displays stored documents with their Arweave transaction IDs

## 🔐 Privacy Considerations

Since data on Arweave is publicly available by default, Paperless-Arweave implements robust encryption:

- Documents are encrypted client-side before being uploaded
- Encryption keys are never stored on Arweave
- Only authorized users with the decryption key can access document contents

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
