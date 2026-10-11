import type { Metadata } from 'next';
import { LegalPage } from '../../components/LegalPage';

export const metadata: Metadata = {
    title: 'Datenschutzerklärung',
    description: 'Informationen zur Verarbeitung personenbezogener Daten auf der Website von Empyron Solutions.',
};

const formspreeEnabled = Boolean(process.env.NEXT_PUBLIC_FORMSPREE_ID);

export default function DatenschutzPage() {
    return (
        <LegalPage title="Datenschutzerklärung">
            <p>Stand: Oktober 2026</p>

            <h2>1. Verantwortlicher</h2>
            <p>
                Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist Bhavya Shah,
                Empyron Solutions, Koblenz, Deutschland. Kontakt: <a href="mailto:bhavya@empyronsolutions.com">bhavya@empyronsolutions.com</a>.
            </p>

            <h2>2. Hosting und Server-Protokolle</h2>
            <p>
                Diese Website wird über GitHub Pages bereitgestellt. Beim Aufruf können durch den Hosting-Anbieter
                technische Verbindungsdaten wie IP-Adresse, Zeitpunkt der Anfrage, angeforderte Ressource und
                Browserinformationen in Server-Protokollen verarbeitet werden, um die Website auszuliefern und
                den sicheren Betrieb zu gewährleisten. Weitere Informationen finden Sie in der{' '}
                <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer">Datenschutzerklärung von GitHub</a>.
            </p>

            <h2>3. Kontaktaufnahme</h2>
            {formspreeEnabled ? (
                <p>
                    Wenn Sie das Kontaktformular absenden, werden die von Ihnen eingegebenen Angaben (Name,
                    E-Mail-Adresse, Unternehmen und Nachricht) zur Bearbeitung Ihrer Anfrage an Empyron Solutions
                    übermittelt. Die Übermittlung erfolgt über Formspree als technischen Formularanbieter. Bitte
                    beachten Sie ergänzend die{' '}
                    <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">Datenschutzhinweise von Formspree</a>.
                </p>
            ) : (
                <p>
                    Das Kontaktformular öffnet eine voradressierte E-Mail in Ihrem E-Mail-Programm. Die Website
                    übermittelt oder speichert die Formulareingaben dabei nicht selbst. Wenn Sie die E-Mail
                    absenden, werden die darin enthaltenen Angaben zur Bearbeitung Ihrer Anfrage per E-Mail an
                    Empyron Solutions übermittelt.
                </p>
            )}
            <p>
                Die Verarbeitung erfolgt zur Bearbeitung Ihrer Anfrage und vorvertraglicher Kommunikation. Die
                Angaben werden gelöscht, sobald sie für diesen Zweck nicht mehr erforderlich sind und keine
                gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>

            <h2>4. Schriftarten und Cookies</h2>
            <p>
                Die auf dieser Website verwendeten Schriftarten werden lokal mit der Website ausgeliefert. Beim
                Seitenaufruf wird dafür keine Verbindung zu Google Fonts hergestellt. Diese Website verwendet
                keine Analyse- oder Marketing-Cookies und setzt keine Werbe-Tracker ein.
            </p>

            <h2>5. Ihre Rechte</h2>
            <p>
                Sie haben im Rahmen der gesetzlichen Voraussetzungen das Recht auf Auskunft, Berichtigung,
                Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit sowie das Recht, sich bei einer
                Datenschutz-Aufsichtsbehörde zu beschweren. Zur Ausübung Ihrer Rechte wenden Sie sich an{' '}
                <a href="mailto:bhavya@empyronsolutions.com">bhavya@empyronsolutions.com</a>.
            </p>

            <h2>6. Aktualität</h2>
            <p>Diese Datenschutzerklärung kann angepasst werden, wenn sich die Website oder die Datenverarbeitung ändert.</p>
        </LegalPage>
    );
}
