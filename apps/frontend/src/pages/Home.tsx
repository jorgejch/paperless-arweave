/* TypeScript React (TSX) */
import React from 'react';
import {Link} from 'react-router-dom';

export default function Home(): React.JSX.Element {
    return (
        <main>
            <div className="card">
                <h3>Welcome</h3>
                <p>
                    This frontend demonstrates basic document browsing and wallet-based authentication flows.
                </p>
                <p>
                    Go to <Link to="/documents">Documents</Link> to see the sample list.
                </p>
            </div>
        </main>
    );
}
