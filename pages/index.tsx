import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>testing_IT</title>
        <meta name="description" content="This app helps a person brainstorm about ideas to make money online based on their own hobbies, interests, resume and manifesto" />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <header className="border-b border-slate-700 bg-slate-900/80 sticky top-0">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              testing_IT
            </h1>
          </div>
        </header>
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-5xl font-bold text-white mb-4">This app helps a person brainstorm about ideas to make money online based on their own hobbies, interests, resume and manifesto</h2>
              <p className="text-xl text-slate-300 mb-6">unemployed</p>
              <p className="text-lg text-slate-400 mb-8"> Step 1) Ask questions about their hobbies, interests, upload resume (optional), copy manifesto in( optional) based on who they are.  
Step 2) AI takes all this info and determines 5 ideas for apps, 
step 3) with those ideas, ai does analysis from answers, skills, experience, education, awards, certifications on the existing market, who's filling that service or product and what gaps this new idea can address,  a
step 4) Analysis for every idea, 
Step 5) When purchasing, will need a page for pricing, if its a subscription or flat fee and how much
step 6) then the users must enter a phone number and when the app is built, that same phone number is on the purchase screen for the uses to zelle or venmo money to them, Capture the contact details, encrypt so only the seller can see them  for follow-up and or.</p>
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold py-3 px-8 rounded-lg">
                Get Started
              </button>
            </div>
            <div className="bg-indigo-500/10 border border-slate-700 rounded-lg p-8 h-80 flex items-center justify-center text-slate-300">
              Your App Preview
            </div>
          </div>
          <section className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-8">Features</h3>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                  <div className="text-4xl mb-3">🚀</div>
                  <p className="text-slate-400">Set up GitHub repository and development environment</p>
                </div>
                <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                  <div className="text-4xl mb-3">⚡</div>
                  <p className="text-slate-400">Design database schema and data models</p>
                </div>
            </div>
          </section>
        </section>
      </main>
    </>
  )
}