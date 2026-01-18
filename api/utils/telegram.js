// Telegram Bot Utility
// Sends notifications via Telegram Bot API

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
// Both appointments and payments go to FionGoldenContact group (-1003619662381)
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '-1003619662381'; // FionGoldenContact group
const TELEGRAM_APPOINTMENT_TOPIC_ID = process.env.TELEGRAM_APPOINTMENT_TOPIC_ID || '2'; // Topic ID 2 for appointments
const TELEGRAM_PAYMENT_CHAT_ID = process.env.TELEGRAM_PAYMENT_CHAT_ID || '-1003619662381'; // Same group for payments
const TELEGRAM_PAYMENT_TOPIC_ID = process.env.TELEGRAM_PAYMENT_TOPIC_ID; // Topic ID for payments (N/A = no topic)

const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`;

/**
 * Send a message to Telegram
 * @param {string} chatId - Chat ID to send message to
 * @param {string} message - Message text
 * @param {number|null} messageThreadId - Topic/thread ID for groups (optional)
 * @returns {Promise<boolean>} - Success status
 */
async function sendTelegramMessage(chatId, message, messageThreadId = null) {
  if (!TELEGRAM_BOT_TOKEN) {
    console.error('❌ TELEGRAM_BOT_TOKEN is not set');
    return false;
  }

  if (!chatId) {
    console.error('❌ Chat ID is not provided');
    return false;
  }

  try {
    const payload = {
      chat_id: chatId,
      text: message,
      parse_mode: 'HTML'
    };

    // Add message_thread_id ONLY if provided and not null (for topics in groups)
    // If null/undefined, don't include it - message goes to general group
    if (messageThreadId !== null && messageThreadId !== undefined) {
      payload.message_thread_id = parseInt(messageThreadId);
    }

    const response = await fetch(`${TELEGRAM_API_URL}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (data.ok) {
      console.log('✅ Telegram message sent successfully');
      return true;
    } else {
      console.error('❌ Telegram API error:', data.description);
      return false;
    }
  } catch (error) {
    console.error('❌ Error sending Telegram message:', error);
    return false;
  }
}

/**
 * Send appointment notification
 * @param {Object} appointmentData - Appointment form data
 * @returns {Promise<boolean>}
 */
async function sendAppointmentNotification(appointmentData) {
  const { fname, lname, email, phone, date, time, message } = appointmentData;

  const messageText = `
🔔 <b>Новая запись на консультацию</b>

👤 <b>Имя:</b> ${fname} ${lname}
📧 <b>Email:</b> ${email}
📱 <b>Телефон:</b> ${phone || 'Не указан'}
📅 <b>Дата:</b> ${date || 'Не указана'}
🕐 <b>Время:</b> ${time || 'Не указано'}
${message ? `💬 <b>Сообщение:</b>\n${message}` : ''}

⏰ <i>${new Date().toLocaleString('ru-RU')}</i>
  `.trim();

  // Send to FionGoldenContact group in topic 2 (Appointment topic)
  return await sendTelegramMessage(TELEGRAM_CHAT_ID, messageText, TELEGRAM_APPOINTMENT_TOPIC_ID);
}

/**
 * Send payment notification
 * @param {Object} paymentData - Payment information
 * @returns {Promise<boolean>}
 */
async function sendPaymentNotification(paymentData) {
  const { amount, currency = 'usd', sessionId, customerEmail } = paymentData;

  const amountFormatted = (amount / 100).toFixed(2);
  const currencySymbol = currency === 'usd' ? '$' : currency.toUpperCase();

  const messageText = `
💰 <b>Новый платеж получен</b>

💵 <b>Сумма:</b> ${currencySymbol}${amountFormatted}
💳 <b>Валюта:</b> ${currency.toUpperCase()}
📧 <b>Email:</b> ${customerEmail || 'Не указан'}
🆔 <b>Session ID:</b> <code>${sessionId}</code>

⏰ <i>${new Date().toLocaleString('ru-RU')}</i>
  `.trim();

  // Send to FionGoldenContact group without topic (general group)
  // Payments should NOT go to a topic, so we pass null explicitly
  return await sendTelegramMessage(
    TELEGRAM_PAYMENT_CHAT_ID,
    messageText,
    null // Explicitly null to send to general group, not a topic
  );
}

module.exports = {
  sendTelegramMessage,
  sendAppointmentNotification,
  sendPaymentNotification,
};
