import { useState } from 'react';

export default function Checklist() {
  const [itens, setItens] = useState([
    { id: 1, texto: 'Aprender Next.js', concluido: false }{ id: 2, texto: 'Criar projeto', concluido: true }]);

  const toggleItem = (id: number) => {
    setItens(
      itens.map((item) =>
        item.id === id ? { ...item, concluido: !item.concluido } : item
      )
    );
  };

  return (
    <ul className="p-4">
      {itens.map((item) => (
        <li key={item.id} className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={item.concluido}
            onChange={() => toggleItem(item.id)}
          />
          <span className={item.concluido ? 'line-through text-gray-500' : ''}>
            {item.texto}
          </span>
        </li>
      ))}
    </ul>
  );
}