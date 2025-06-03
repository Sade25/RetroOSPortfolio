import React, { useState, useEffect } from 'react';

const NotepadContent: React.FC = () => {
  const [content, setContent] = useState('');
  const [currentProblemIndex, setCurrentProblemIndex] = useState<number | null>(null);
  const [answerShown, setAnswerShown] = useState(false);

  // Questions and answers pool
  const problems = [
    {
      question: "What's the difference between an abstract class and interface?",
      answer: "Abstract classes can have implementation details and state, while interfaces only define contracts. A class can implement multiple interfaces but extend only one abstract class."
    },
    {
      question: "You have 10000 coins. 9999 of them are fair; one is rigged so that it always lands on heads. You choose a coin at random and flip it 10 times; it's heads all ten times. The coin is probably?",
      answer: "Fair, there is a 91% chance it is fair"
    },
    {
      question: "What is the time complexity of binary search?",
      answer: "O(log n) - The search space is halved with each iteration."
    },
    {
      question: "In JavaScript, what's the difference between == and ===?",
      answer: "== performs type coercion before comparison, while === compares both value and type without coercion."
    },
    {
      question: "What is the probability of getting exactly 2 heads in 4 coin flips with a fair coin?",
      answer: "3/8 or 37.5%"
    },
    {
      question: "What's the difference between process and thread?",
      answer: "A process is an independent program with its own memory space, while threads are lightweight units within a process that share the same memory space."
    },
    {
      question: "How many bits are needed to represent the number 1000 in binary?",
      answer: "10 bits. 1000 in binary is 1111101000, which requires 10 bits."
    },
    {
      question: "Explain the bias–variance trade-off in supervised learning models.",
      answer: "Bias measures error from erroneous assumptions; variance measures error from sensitivity to training data. A model with high bias underfits, high variance overfits. Optimal complexity balances both to minimize expected generalization error."
    },
    {
      question: "Using Bayes' theorem, compute P(A | B) when P(B | A) = 0.8, P(A) = 0.3, and P(B) = 0.5.",
      answer: "Bayes: P(A|B) = P(B|A)·P(A)/P(B) = 0.8×0.3 / 0.5 = 0.48."
    },
    {
      question: "Compute the determinant of the 3×3 matrix [[2, 1, 3], [0, –1, 4], [5, 2, 0]].",
      answer: "19."
    },
    {
      question: "What is the expected number of fair-coin flips required to observe two consecutive heads?",
      answer: "6 flips. The states form a Markov chain whose expected hitting time yields 6."
    },
    {
      question: "State the Central Limit Theorem (CLT) and explain why n ≳ 30 is often considered sufficient for normal approximation of sample means.",
      answer: "The CLT says that for i.i.d. random variables with finite mean μ and variance σ², the standardized sum √n( X̄ – μ )/σ converges in distribution to N(0,1) as n → ∞. Empirically, many distributions have acceptable approximation error once n is around 30, making z-confidence intervals usable."
    },
    {
      question: "Give the exact worst-case number of key comparisons performed by merge sort on an array of length n and justify the expression.",
      answer: "Merge sort makes ⌈n log₂ n⌉ – n + 1 comparisons in the worst case, which is Θ(n log n). Each level of merging compares elements linearly, and there are ⌈log₂ n⌉ levels."
    },
    {
      question: "Define idempotency in the context of HTTP methods and explain why PUT is idempotent but POST is not.",
      answer: "An idempotent request can be repeated many times with the same effect as a single request. PUT replaces or updates a resource at a known URI, so repeating it leaves state unchanged after the first successful execution. POST creates subordinate resources or triggers server‑side actions, so repeating it can create duplicates or side‑effects, making it non‑idempotent."
    },
    {
      question: "What is eventual consistency in distributed databases, and when is it an acceptable design choice?",
      answer: "Eventual consistency guarantees that, in the absence of new writes, all replicas will eventually converge to the same value. It's acceptable when high availability or partition tolerance is critical, and the application can tolerate temporary stale reads—e.g., social media timelines or shopping cart counters. Techniques such as version vectors, read‑repair, and client‑side retries mitigate its downsides."
    },
    {
      question: "What does atomicity mean in ACID database transactions and how does it differ from isolation?",
      answer: "Atomicity guarantees that all operations within a transaction either complete entirely or have no effect—there is no partial commit. Isolation ensures concurrent transactions appear to execute sequentially, preventing intermediate states from being visible. Atomicity is about all‑or‑nothing durability; isolation is about concurrency visibility."
    }
  ];

  /**
   * Select a random problem index when the component mounts.
   */
  const loadInitialProblem = () => {
    const randomIndex = Math.floor(Math.random() * problems.length);
    setCurrentProblemIndex(randomIndex);
    setContent(problems[randomIndex].question);
    setAnswerShown(false);
  };

  /**
   * After the initial render, cycle through questions sequentially.
   * If the user opens the notepad again, `loadInitialProblem` will pick
   * a fresh random starting point.
   */
  const loadNextProblem = () => {
    setCurrentProblemIndex(prev => {
      const nextIndex = prev === null ? 0 : (prev + 1) % problems.length;
      setContent(problems[nextIndex].question);
      setAnswerShown(false);
      return nextIndex;
    });
  };

  const handleShowAnswer = () => {
    if (currentProblemIndex !== null && !answerShown) {
      setContent(prev => `${prev}\n\nAnswer:\n${problems[currentProblemIndex].answer}`);
      setAnswerShown(true);
    }
  };

  // Run once on mount for a random starting question
  useEffect(() => {
    loadInitialProblem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-full flex flex-col">
      <div className="bg-[#f0f0f0] border-b border-gray-300 p-2 flex gap-2">
        <button
          onClick={loadNextProblem}
          className="px-3 py-1 bg-[#4a90e2] text-white rounded text-sm hover:bg-[#357abd] transition-colors duration-200"
        >
          New Problem
        </button>
        <button
          onClick={handleShowAnswer}
          disabled={answerShown}
          className={`px-3 py-1 rounded text-sm transition-colors duration-200 ${
            answerShown
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
              : 'bg-[#4a90e2] text-white hover:bg-[#357abd]'
          }`}
        >
          Show Answer
        </button>
      </div>
      <textarea
        className="flex-grow w-full p-4 font-mono text-sm bg-white resize-none focus:outline-none"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        spellCheck="false"
      />
    </div>
  );
};

export default NotepadContent;
