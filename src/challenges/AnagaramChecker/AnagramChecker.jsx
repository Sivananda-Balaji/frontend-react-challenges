import { useState } from "react";

const AnagramChecker = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [loading, setLoading] = useState(false);
  const [anagramMsg, setAnagramMsg] = useState("");
  const [showMsg, setShowMsg] = useState(false);
  const handleClick = () => {
    setLoading(true);
    try {
      const map = {};
      const len1 = input1.length;
      const len2 = input2.length;
      if (len1 !== len2) {
        setShowMsg(true);
        setAnagramMsg(`${input1}and ${input2} are not anagrams.`);
      }
      for (let i = 0; i < len1; i++) {
        const letter = input1[i].toLowerCase();
        map[letter] !== undefined ? map[letter]++ : (map[letter] = 1);
      }
      for (let i = 0; i < len2; i++) {
        const letter = input2[i].toLowerCase();
        if (map[letter] > 1) {
          map[letter]--;
        } else if (map[letter] === 1) {
          delete map[letter];
        }
      }
      if (Object.entries(map).length === 0) {
        setShowMsg(true);
        setAnagramMsg(`"${input1}" and "${input2}" are anagrams!`);
      } else {
        setShowMsg(true);
        setAnagramMsg(`"${input1}" and "${input2}" are not anagrams.`);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div>
        <p>First word or phrase:</p>
        <input
          type="text"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
      </div>
      <div>
        <p>Second word or phrase:</p>
        <input
          type="text"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
      </div>
      <button onClick={handleClick} disabled={loading}>
        {loading ? "Checking..." : "Check if Anagram"}
      </button>
      {showMsg && <p>{anagramMsg}</p>}
    </div>
  );
};

export default AnagramChecker;
