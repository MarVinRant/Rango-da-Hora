// src/utils/whatsapp.js

export const generateWhatsAppLink = (cart, totalCart, address) => {
  // Alterei a saudação para a nova marca
  let text = `Olá, Churrascaria da Hora! Quero fazer um pedido:\n\n`;
  
  cart.forEach(item => {
    text += `${item.qty}x ${item.name} - R$ ${(item.price * item.qty).toFixed(2)}\n`;
  });
  
  text += `\n*Total: R$ ${totalCart.toFixed(2)}*`;
  text += `\n*Endereço:* ${address}`;
  
  const encodedText = encodeURIComponent(text);
  
  // Substitua o número caso o cliente tenha mudado o WhatsApp da churrascaria
  return `https://wa.me/5511934089228?text=${encodedText}`;
};