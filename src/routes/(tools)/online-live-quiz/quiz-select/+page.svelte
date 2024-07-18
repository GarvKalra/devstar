<script>
  let quizzes = [
      { id: 1, title: 'JavaScript Basics', description: 'Test your knowledge on JavaScript fundamentals.' },
      { id: 2, title: 'HTML & CSS', description: 'How well do you know web development?' },
      { id: 3, title: 'React', description: 'Challenge your skills in React.' }
  ];
</script>
<style>
  :global(body) {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background: #F5F5F5;
  }
  .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 2rem;
      background: white;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
  }
  header {
      text-align: center;
      margin-bottom: 2rem;
  }
  header h1 {
      font-size: 2.5rem;
      color: #333;
  }
  nav a {
      margin: 0 1rem;
      text-decoration: none;
      color: #007BFF;
  }
  nav a:hover {
      text-decoration: underline;
  }
  main h2 {
      font-size: 2rem;
      color: #333;
  }
  .quiz {
      border: 1px solid #ddd;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      border-radius: 5px;
      transition: box-shadow 0.3s;
  }
  .quiz:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .quiz h3 {
      margin: 0 0 0.5rem 0;
      color: #007BFF;
  }
  .quiz p {
      margin: 0 0 1rem 0;
      color: #555;
  }
  .quiz a {
      text-decoration: none;
      color: white;
      background: #007BFF;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: background 0.3s;
  }
  .quiz a:hover {
      background: #0056B3;
  }
  footer {
      background-color: #F1F1F1;
      text-align: center;
      padding: 1rem;
      margin-top: 2rem;
      border-radius: 8px;
  }
</style>
<div class="container">
  <header>
      <h1>Welcome to Online Live Quiz</h1>
      <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
      </nav>
  </header>
  <main>
      <h2>Available Live Quizzes</h2>
      {#each quizzes as quiz}
          <div class="quiz">
              <h3>{quiz.title}</h3>
              <p>{quiz.description}</p>
              <a href={`/quiz/${quiz.id}`}>Join Live Quiz</a>
          </div>
      {/each}
  </main>
  <footer>
      <p>MetaCraftlab</p>
  </footer>
</div>
