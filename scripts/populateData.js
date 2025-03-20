const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Import Product model
const Product = require('../models/Product');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Product Data
const productsData = [
  // Energy-Boosting Products
  { name: "H&B CoQ10 100mg", description: "Supports energy production and heart health.", price: 19.99, category: "Energy", tags: ["coq10", "energy"], imageUrl: "" },
  { name: "H&B Vitamin B Complex", description: "Essential for reducing fatigue and boosting metabolism.", price: 12.99, category: "Energy", tags: ["b-complex", "vitamins"], imageUrl: "" },
  { name: "H&B Korean Ginseng", description: "Helps reduce tiredness and supports focus.", price: 15.99, category: "Energy", tags: ["ginseng", "natural-energy"], imageUrl: "" },
  { name: "H&B Iron & Vitamin C Tablets", description: "Helps with energy production and reduces tiredness.", price: 9.99, category: "Energy", tags: ["iron", "fatigue"], imageUrl: "" },

  // Nutrition & Vegan Supplements
  { name: "H&B Vegan Omega-3", description: "Supports heart and brain function with algae-based Omega-3.", price: 16.99, category: "Nutrition", tags: ["vegan", "omega-3"], imageUrl: "" },
  { name: "H&B Organic Spirulina Powder", description: "Rich in protein and essential vitamins, perfect for vegans.", price: 11.99, category: "Nutrition", tags: ["superfood", "protein"], imageUrl: "" },
  { name: "H&B Plant-Based Protein Powder", description: "Complete protein source for muscle growth and recovery.", price: 24.99, category: "Nutrition", tags: ["vegan", "protein"], imageUrl: "" },
  { name: "H&B Multivitamin Gummies", description: "Delicious way to get daily essential vitamins.", price: 14.99, category: "Nutrition", tags: ["multivitamin", "gummies"], imageUrl: "" },

  // Fitness & Muscle Building
  { name: "H&B Creatine Monohydrate", description: "Boosts strength, endurance, and recovery.", price: 18.99, category: "Fitness", tags: ["creatine", "muscle-growth"], imageUrl: "" },
  { name: "H&B Whey Protein Isolate", description: "High-protein shake for muscle maintenance.", price: 34.99, category: "Fitness", tags: ["protein", "fitness"], imageUrl: "" },
  { name: "H&B BCAA Powder", description: "Essential amino acids for muscle recovery.", price: 22.99, category: "Fitness", tags: ["bcaa", "recovery"], imageUrl: "" },
  { name: "H&B L-Glutamine Capsules", description: "Helps with muscle repair and gut health.", price: 14.99, category: "Fitness", tags: ["recovery", "amino-acid"], imageUrl: "" },

  // Immunity & General Health
  { name: "H&B High Strength Vitamin C", description: "Supports immune defense and collagen production.", price: 13.99, category: "Immunity", tags: ["vitamin-c", "immune-support"], imageUrl: "" },
  { name: "H&B Zinc & Vitamin D3", description: "Essential for immune function and bone health.", price: 10.99, category: "Immunity", tags: ["zinc", "vitamin-d"], imageUrl: "" },
  { name: "H&B Elderberry & Echinacea", description: "Natural immune booster with antioxidants.", price: 16.99, category: "Immunity", tags: ["elderberry", "cold-prevention"], imageUrl: "" },
  { name: "H&B Probiotic Complex", description: "Supports gut health and overall immunity.", price: 18.99, category: "Immunity", tags: ["probiotics", "gut-health"], imageUrl: "" },

  // Stress & Sleep Support
  { name: "H&B Ashwagandha Capsules", description: "Reduces stress, improves mood, and supports focus.", price: 14.99, category: "Stress", tags: ["ashwagandha", "adaptogen"], imageUrl: "" },
  { name: "H&B Magnesium & B6", description: "Helps with relaxation and sleep quality.", price: 12.99, category: "Stress", tags: ["magnesium", "sleep"], imageUrl: "" },
  { name: "H&B CBD Oil 10%", description: "Promotes relaxation and reduces anxiety.", price: 29.99, category: "Stress", tags: ["cbd", "calm"], imageUrl: "" },
  { name: "H&B Valerian Root Tablets", description: "Supports natural sleep and relaxation.", price: 9.99, category: "Stress", tags: ["sleep", "herbal"], imageUrl: "" },

  // Beauty & Skin Health
  { name: "H&B Collagen Peptides", description: "Supports skin hydration, hair, and nails.", price: 19.99, category: "Beauty", tags: ["collagen", "skin-care"], imageUrl: "" },
  { name: "H&B Hyaluronic Acid Capsules", description: "Keeps skin hydrated and youthful.", price: 15.99, category: "Beauty", tags: ["hyaluronic-acid", "anti-aging"], imageUrl: "" },
  { name: "H&B Biotin 5000mcg", description: "Promotes strong hair and nails.", price: 12.99, category: "Beauty", tags: ["biotin", "hair-growth"], imageUrl: "" },
  { name: "H&B Vitamin E Oil", description: "Moisturizes skin and protects against dryness.", price: 8.99, category: "Beauty", tags: ["vitamin-e", "moisturizer"], imageUrl: "" },
];

// Add Products to Database
async function addProducts() {
  try {
    await Product.insertMany(productsData);
    console.log("✅ Products added successfully!");
  } catch (err) {
    console.error("❌ Error adding products:", err);
  } finally {
    mongoose.disconnect();
  }
}

// Run the script
addProducts();
