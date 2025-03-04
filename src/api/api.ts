export interface Quote {
  text: string;
  author: string;
}

export const fetchQuotes = async (): Promise<Quote[]> => {
  try {
    const response = await fetch(
      "https://luciferquotes.shadowdev.xyz/api/quotes"
    );
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const data: Quote[] = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
