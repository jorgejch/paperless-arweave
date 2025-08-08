/* TypeScript React (TSX) */
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import api from '../services/api';

type Doc = { id: string; title?: string; txId?: string };

export default function Documents(): React.JSX.Element {
    const [docs, setDocs] = useState<Doc[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;
        (async () => {
            try {
                // Replace '/documents' with your backend endpoint
                const list = await api.get<Document[]>('/documents').catch(() => null);
                // Example fallback data if backend isn't available:
                const fallback = [
                    {id: 'doc-1', title: 'Sample document 1', txId: 'tx_abc123'},
                    {id: 'doc-2', title: 'Sample document 2', txId: 'tx_def456'},
                ];
                if (mounted) {
                    setDocs((list as any)?.data ?? fallback);
                }
            } finally {
                if (mounted) setLoading(false);
            }
        })();
        return () => {
            mounted = false;
        };
    }, []);

    if (loading) return <div className="card">Loading documents…</div>;

    if (!docs.length) return <div className="card">No documents found.</div>;

    return (
        <section>
            {docs.map((d) => (
                <div key={d.id} className="card">
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div>
                            <strong>{d.title ?? d.id}</strong>
                            <div style={{color: 'var(--muted)'}}>{d.txId ?? 'Not published'}</div>
                        </div>
                        <div>
                            <Link to={`/documents/${d.id}`} className="button">View</Link>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
