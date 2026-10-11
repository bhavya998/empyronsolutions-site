import type { Metadata } from 'next';
import { LegalPage } from '../../components/LegalPage';

export const metadata: Metadata = {
    title: 'Impressum',
    description: 'Anbieterkennzeichnung und Kontakt für Empyron Solutions.',
};

export default function ImpressumPage() {
    return (
        <LegalPage title="Impressum">
            <h2>Angaben gemäß § 5 DDG</h2>
            <address className="not-italic">
                <strong>Empyron Solutions</strong><br />
                Inhaber: Bhavya Shah<br />
                Koblenz, Deutschland
            </address>

            <h2>Kontakt</h2>
            <p>
                E-Mail: <a href="mailto:bhavya@empyronsolutions.com">bhavya@empyronsolutions.com</a>
            </p>

            <h2>Verantwortlich für den Inhalt</h2>
            <p>Bhavya Shah, Koblenz, Deutschland.</p>

            <h2>Haftung für Inhalte</h2>
            <p>
                Die Inhalte dieser Website werden mit Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
                Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Gesetzliche Verpflichtungen zur
                Entfernung oder Sperrung der Nutzung von Informationen bleiben unberührt.
            </p>

            <h2>Urheberrecht</h2>
            <p>
                Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem deutschen Urheberrecht.
                Eine Nutzung außerhalb der gesetzlichen Grenzen bedarf der vorherigen Zustimmung der jeweiligen
                Rechteinhaber.
            </p>
        </LegalPage>
    );
}
