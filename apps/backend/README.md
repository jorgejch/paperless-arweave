# Paperless-Arweave backend

## Overview

This backend is a lightweight TypeScript service that provides the APIs and background processing required to integrate
the frontend and Paperless-ngx with a persistent document storage workflow. Its responsibilities are focused and
minimal:

- Expose REST endpoints used by the frontend and by Paperless-ngx post-consume hooks
- Authenticate users via Wander wallet signature verification (nonce → sign → verify → issue short‑lived session/JWT)
- Persist metadata and application state in PostgreSQL
- Optionally run background jobs for uploads, encryption, and other post-processing tasks
- Integrate with a Paperless-ngx instance via its REST API and post-consume hooks

The service is intentionally compact: it focuses on reliable auth, secure handling of documents, and simple integration
with Paperless-ngx so it can run alongside existing deployments or in a containerized environment.

## Prerequisites

- Node.js 22+
- npm
- PostgreSQL

## Installation

1. `npm install`
2. `npm run start`
3. Login by accessing http://localhost:3001/login and signing in with your Wander wallet.
4. After logging in your wallet public key will be stored in the database.

## API

### List document IDs associated with a wallet address

GET /api/v1/documents/

### Retrieve document content by document ID

GET /api/v1/documents/:id

### Accept a post-consume publish request to persist a processed document

POST /api/v1/documents/

