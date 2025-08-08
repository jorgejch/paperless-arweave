/* TypeScript React (TSX) */
import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(): React.JSX.Element {
    return (
        <header className="header">
            <div>
                <h2 style={{margin: 0}}>Paperless-Arweave</h2>
                <small style={{color: 'var(--muted)'}}>Frontend demo</small>
            </div>
            <nav>
                <Link to="/" style={{marginRight: 12}}>
                    Home
                </Link>
                <Link to="/documents" className="button secondary">
                    Documents
                </Link>
            </nav>
        </header>
    );
}
