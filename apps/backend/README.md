# Paperless-Arweave Backend

## Overview

This backend is a lightweight TypeScript service that provides the APIs and background processing required to integrate
the frontend and Paperless-ngx with a persistent document storage workflow. Its responsibilities are focused and
minimal:

- Expose REST endpoints used by the frontend and by Paperless-ngx post-consume hooks:
    - List document IDs associated with a wallet address
    - Retrieve document content by document ID
    - Accept a post-consume publish request to persist a processed document

- Authenticate users via Wander wallet signature verification (nonce → sign → verify → issue short‑lived session/JWT)
- Persist metadata and application state in PostgreSQL
- Optionally run background jobs for uploads, encryption, and other post-processing tasks
- Integrate with a Paperless-ngx instance via its REST API and post-consume hooks

The service is intentionally compact: it focuses on reliable auth, secure handling of documents, and simple integration
with Paperless-ngx so it can run alongside existing deployments or in a containerized environment.

## Prerequisites

- Node.js >= 18
- npm
- PostgreSQL