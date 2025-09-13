// Configuration file for Wisdom Cafe
// Replace 'YOUR_API_KEY_HERE' with your actual Gemini API key
// You can get your API key from: https://aistudio.google.com/app/apikey

const CONFIG = {
    // Gemini API Configuration
    GEMINI_API_KEY: 'YOUR_API_KEY_HERE', // Replace with your actual API key
    
    // Cafe Information
    CAFE_NAME: 'Wisdom Cafe',
    CAFE_DESCRIPTION: 'Kafe dengan suasana alam, tempat untuk refleksi dan percakapan yang bermakna',
    
    // Contact Information
    WHATSAPP_NUMBER: '083143087159',
    INSTAGRAM_HANDLE: '@wisatadombagarut',
    
    // Operating Hours
    OPERATING_HOURS: '09:00 - 21:00 setiap hari',
    
    // Menu Items
    SPECIALTY_COFFEE: 'Kopi Domba Arabika',
    COFFEE_TYPES: ['Latte', 'Cappuccino', 'Espresso', 'Kopi Domba Arabika'],
    
    // System Prompt for AI Assistant
    SYSTEM_PROMPT: `Anda adalah asisten AI untuk Wisdom Cafe, sebuah kafe yang menawarkan kopi dan makanan dengan suasana alam. 
    Informasi tentang kafe:
    - Nama: Wisdom Cafe (DeWisdom Cafe)
    - Spesialisasi: Kopi Domba Arabika, Latte, Cappuccino, Espresso
    - Menu: Berbagai jenis kopi, teh, dan makanan ringan
    - Jam operasional: 09:00 - 21:00 setiap hari
    - Kontak: WhatsApp 083143087159
    - Instagram: @wisatadombagarut
    - Konsep: Kafe dengan suasana alam, tempat untuk refleksi dan percakapan yang bermakna
    
    Jawablah pertanyaan dengan ramah, informatif, dan sesuai dengan karakter kafe yang hangat dan natural. 
    Jika ditanya hal di luar konteks kafe, arahkan kembali ke topik kafe atau layanan yang tersedia.`
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
}
