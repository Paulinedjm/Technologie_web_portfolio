//app/CVentry/page.tsx

function Section(props: {title:string, children:React.ReactNode}) {
    return (
    <div className="mb-6">
        <h2 className="font-bold text-blue-900 text-lg uppercase tracking-wider border-b-2 border-blue-100 pb-1 mb-3">
            {props.title}
        </h2>
        {props.children}
        
    </div>
    )
}

function Section_Item(props: {subtitle: string, period?: string, description?: string, children?:React.ReactNode}) {
    return(
        <div>
            <h3 className="font-bold text-gray-900 ">{props.subtitle}</h3>
            <span className="text-sm text-gray-700 font-medium">{props.period}</span>
            
            <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                {props.description}
            </p> 
            {props.children}
        </div>
    )
}

function List(props: { items: string[] }) {
    return (
        <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-1">
            {props.items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

export default function CVentry() {
    return(
    <div className="bg-slate-50 min-h-screen py-10 px-4 font-sans text-slate-800">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 p-8 sm:p-10 space-y-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Pauline de Jamblinne
            </h1>
            <p className="text-slate-700 font-medium text-base mt-1">
                Étudiante / Recherche de stage
            </p>
            <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-500 mt-4">
                <span className="flex items-center gap-1"> pauline@example.com</span>
                <span className="flex items-center gap-1"> +32 4XX XX XX XX</span>
                <span className="flex items-center gap-1">Bruxelles, Belgique</span>
            </div>
        </div>
    
    
      <Section title = "Education">
        <Section_Item subtitle="ECAM" period="2024-..." description="formation en ingénieur industrielle option informatique-electronique"  />
        <Section_Item subtitle="VF" period ="2021-2024" description ="Immersion, Science 6h, Maths 4h" />
        <Section_Item subtitle="HHC" period="2018-2021" />
      </Section>

      <Section title="Expérience professionelle">
        <Section_Item subtitle="Creacorneur" period="2025-..." description="vendeuse" />
        <Section_Item subtitle="Création d'une IA" period="2026" description="Dans le cadre d'un projet pouor l'école nous avons
        crée une IA capable de jouer au jeu Kamisado" />
        <Section_Item subtitle="LJE" period="2022-2023" description="Création d'une mini-entreprise pendant 1 an avec des camarades
        de classe, departement financier" />
      </Section>

      <Section title="Compétences">
        <Section_Item subtitle="Language de programmation">
        <List items={["Python","HTML","C"]} />
        </Section_Item>

        <Section_Item subtitle="Langue">
        <List items={["Français","Anglais","Néerlandais"]} />
        </Section_Item>
      </Section>

    </div>
    )
}