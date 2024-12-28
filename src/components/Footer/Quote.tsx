import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { random } from "lodash";
import React from "react";

interface Quote {
  quote: string;
  author: string;
}
const QUOTES: Quote[] = [
  {
    quote: "In the land of the blind, the one-eyed man is king.",
    author: "Desiderius Erasmus",
  },
  {
    quote:
      "Give me 6 hours to chop down a tree and I would spend the first 4 hours sharpening my axe.",
    author: "Abraham Lincoln",
  },
  {
    quote: "How we spend our days is, of course, how we spend our lives.",
    author: "Annie Dillard",
  },
  {
    quote:
      "The heights by great men reached and kept were not attained by sudden flight, but they, while their companions slept, were toiling upward in the night.",
    author: "Henry Wadsworth Longfellow",
  },
  {
    quote:
      "A mistake that makes you humble is better than an achievement that makes you arrogant.",
    author: "Amit Kalantri",
  },
  {
    quote:
      "Sometimes it is the people who no one imagines anything of who do the things that no one can imagine.",
    author: "Alan Turing",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "I learned that courage was not the absence of fear, but the triumph over it.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "Today I will do what others won't, so tomorrow I can accomplish what others can't.",
    author: "Jerry Rice",
  },
  {
    quote:
      "The test of our progress is not whether we add more to the abundance of those who have much; it is whether we provide enough for those who have too little.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "A Question opens the mind. A statement Closes the mind.",
    author: "Robert Kiyosaki",
  },
  {
    quote:
      "A ship is always safe at shore, but that is not what it's built for.",
    author: "Albert Einstein",
  },
  {
    quote:
      "The two most important days in your life are the day you are born and the day you find out why.",
    author: "Mark Twain",
  },
  {
    quote: "An eye for an eye makes the whole world blind.",
    author: "Mahatma Gandhi",
  },
  { quote: "Change is the only constant in life.", author: "Heraclitus" },
  {
    quote:
      "If you don't have a plan, you become a part of someone else's plan.",
    author: "Terence McKenna",
  },
  {
    quote: "Hope is a good breakfast, but it is a bad supper.",
    author: "Francis Bacon",
  },
  {
    quote:
      "A dream you dream alone is only a dream. A dream you dream together is reality.",
    author: "John Lennon & Yoko Ono",
  },
  {
    quote:
      "Coming together is the beginning. Keeping together is progress. Working together is success.",
    author: "Henry Ford",
  },
  {
    quote:
      "Courage is resistance to fear, mastery of fear - not absence of fear.",
    author: "Mark Twain",
  },
  {
    quote:
      "All we have to decide is what to do with the time that is given us.",
    author: "J.R.R. Tolkien",
  },
  {
    quote: "A head full of fears has no space for dreams.",
    author: "Yes Theory",
  },
  {
    quote:
      "Life isn't about waiting for the storm to pass, its about learning how to dance in the rain.",
    author: "Vivian Greene",
  },
  {
    quote:
      "The brick walls are not there to keep us out. The brick walls are there to give us the chance to show how badly we want something.",
    author: "Randy Pausch",
  },
  {
    quote: "The master has failed more times than the beginner has even tried.",
    author: "Stephen McCranie",
  },
  {
    quote:
      "I wish there was a way to know you're in the good old days before you've actually left them.",
    author: "Andy Bernard",
  },
  {
    quote:
      "It is better to debate a question without settling it than to settle a question without debating it.",
    author: "Joseph Joubert",
  },
  {
    quote: "People don't buy what you do. They buy why you do it.",
    author: "Simon Sinek",
  },
  {
    quote:
      "When exposing a crime is treated as committing a crime, you are being ruled by criminals.",
    author: "Edward Snowden",
  },
  {
    quote:
      "When you like a flower, you pluck it, but when you love a flower, you water it.",
    author: "Gautama Buddha",
  },
  {
    quote:
      "Life isn't about finding yourself. Life is about creating yourself.",
    author: "George Bernard Shaw",
  },
];

const getRandomQuote = () => {
  const quotesLength = QUOTES.length;
  const randomIndex = random(0, quotesLength - 1);
  return QUOTES[randomIndex];
};

export default function Quote() {
  // Every some seconds, randomly select a quote
  const SECS_PER_QUOTE = 30; // seconds
  const [quote, setQuote] = React.useState<Quote>(QUOTES[0]); // Initial quote must be same on server and client!

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (typeof window === "undefined") return;
      setQuote(getRandomQuote);
    }, SECS_PER_QUOTE * 1000); // In milliseconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Grid
      size={{ xs: 12, md: 8 }}
      container
      width="fit-content"
      fontStyle="italic"
      fontFamily="Georgia"
      direction={{ xs: "column", md: "row" }}
    >
      <Grid size={{ xs: 12, md: 1 }}>
        <Typography fontFamily="inherit" fontSize="80px">
          &ldquo;
        </Typography>
      </Grid>
      <Grid size={10}>
        <Typography fontFamily="inherit" fontSize="20px" px={1}>
          {quote.quote}
        </Typography>
        <Typography fontFamily="inherit" fontSize="16px" align="right">
          - {quote.author}
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 1 }} textAlign="right">
        <Typography fontFamily="inherit" fontSize="80px">
          &rdquo;
        </Typography>
      </Grid>
    </Grid>
  );
}
