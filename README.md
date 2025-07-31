Here’s a professional `README.md` file for your project based on the two files (`query.js` and `dataindexing.js`) you shared. I've also included a tag to **Rohit Negi Sir**.

---

## 🎬 Netflix Movie & TV Suggestion Expert using Gemini + Pinecone

> 🚀 Built with 💡 by Harshit Jain — with special thanks to **@RohitNegiSir** for guidance and inspiration.

### 🔍 Project Description

This project is a **query-aware AI movie and TV show recommendation system**, powered by:

* **Gemini (Google Generative AI)** for content generation and embeddings
* **Pinecone Vector DB** for semantic search over a custom dataset
* Based on **LangChain**, it rewrites follow-up queries into full, standalone questions and answers them based on contextual matches from a dataset (`Netflix.csv`).

---

### 📁 File Structure

```bash
├── query.js          # Main chatbot that interacts with user queries
├── dataindexing.js   # One-time script to index Netflix dataset into Pinecone
├── Netflix.csv       # Your dataset (not uploaded here, but used in indexing)
├── .env              # Environment variables (API keys, index names, etc.)
```

---

### ⚙️ Features

* 🧠 Gemini-powered intelligent query rewriting
* 📚 Context-aware answers using similarity search from Pinecone
* 🎥 Suggests **similar movies/shows** purely based on **plot description**, **not by type/genre/language**
* 🗃️ Chunking & vectorizing of dataset with LangChain

---

### 🛠️ Installation & Setup

1. **Clone this repo**

```bash
git clone https://github.com/yourusername/netflix-ai-recommender.git
cd netflix-ai-recommender
```

2. **Install dependencies**

```bash
npm install
```

3. **Setup your `.env` file**

```
GEMINI_API_KEY=your_gemini_api_key
PINECONE_API_KEY=your_pinecone_key
PINECONE_ENVIRONMENT=your_pinecone_env
PINECONE_INDEX_NAME=your_index_name
```

4. **Index the dataset**

```bash
node dataindexing.js
```

5. **Start the chatbot**

```bash
node query.js
```

### 🧪 Sample Questions to Try

> You can ask questions like:

* `"Suggest me a TV show similar to Into the Night"`
* `"Which movies are similar to Dangal?"`
* `"What should I watch if I like Breaking Bad?"`
* `"Recommend a crime thriller show like Money Heist"`
* `"Give me a romantic movie similar to Koi Aap Sa"`


 🧑‍🏫 Credits

* 💡 Developed by **Harshit Jain**
* 🧠 Special thanks to rohit negi sir (https://github.com/RohitNegiSir) for guidance on AI workflows and architecture
