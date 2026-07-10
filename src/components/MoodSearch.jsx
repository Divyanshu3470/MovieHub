import { useState } from "react";
import ai from "../config/gemini";

function MoodSearch({ onMovieFound }) {
    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);

    const handleMoodSearch = async () => {
        if (!prompt.trim()) return;

        setLoading(true);

        try {
            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: `You are a movie recommendation assistant.
                The user says:
                "${prompt}"

                Return ONLY ONE movie title.
                Do not explain anything.
                Do not include quotes.
                Only the movie title.
        `,
            });

            const movieTitle = response.text.trim();
            onMovieFound(movieTitle);
        } catch (err) {
            console.log(err);
        }

        setLoading(false);
    };

    return (
        <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-lg">

                <h2 className="text-black text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                    Mood-Based Movie Search
                </h2>

                <p className="text-gray-300 text-sm sm:text-base mb-6">
                    Tell us how you're feeling, and AI will recommend a movie for you.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <input
                        type="text"
                        className="flex-1 rounded-full border border-gray-500 bg-white/90 px-5 py-3 text-black outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g. I want something funny and relaxing..."
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handleMoodSearch();
                        }}
                    />

                    <button
                        onClick={handleMoodSearch}
                        disabled={loading}
                        className="w-full sm:w-auto rounded-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 transition px-8 py-3 text-white font-semibold"
                    >
                        {loading ? "Thinking..." : "Find Movie"}
                    </button>
                </div>

            </div>
        </section>
    );
}

export default MoodSearch;