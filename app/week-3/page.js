import ItemList from './item-list.js';

const Page = () => {
  return (
    <main className="container p-6 bg-slate-950">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;