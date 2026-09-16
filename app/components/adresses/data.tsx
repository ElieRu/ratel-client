import type { Adresse } from "@/lib/validations";


export function Data ({ adresse }: { adresse: Adresse }) {
    return <div>
        <h1>datas</h1>
        <pre>
            {adresse.adresse}
            {adresse.region}
            {adresse.ville}
            {adresse.pays}
            {adresse.codePostal}
        </pre>
    </div>
}