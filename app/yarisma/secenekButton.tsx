interface SecenekButonProps {
  secenek: string;
  indeks: number;
  secimYap: (indeks: number) => void;
  dogruIndex: number;
  yanlisIndex: number;
}

export default function SecenekButon({
  secenek,
  indeks,
  secimYap,
  dogruIndex,
  yanlisIndex,
}: SecenekButonProps) {
  return (
    <button
      onClick={() => secimYap(indeks)}
      className={`border py-2 px-4 rounded-md 
        ${dogruIndex === indeks ? "bg-green-600" : ""} 
        ${yanlisIndex === indeks ? "bg-red-600" : ""}`}
    >
      {secenek}
    </button>
  );
}
