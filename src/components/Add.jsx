export default function Add() {
  return (
    <>
      <div className="space-x-2">
        <input
          type="text"
          className="border-2 border-dark/20 focus:outline-none focus:ring-primary focus:ring-2 focus:border-transparent rounded-sm p-1"
        />
        <button type="submit" className="btn-primary">
          add
        </button>
      </div>
    </>
  );
}
