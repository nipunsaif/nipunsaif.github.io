// ==========================================
// 1. CareerMAS
// ==========================================
var imageId = "careermas_image";
// 
// TODO: Replace with your actual image paths
var image1 = "images/careermas_1.png"; 
var image2 = "images/careermas_2.gif";
var paperTitle = "CareerMAS: A Multi-Agent LLM Framework for Career Guidance and Job Placement in Bangladesh";
var descriptiom = "This research introduces CareerMAS, a multi-agent LLM-based framework for intelligent career guidance and job placement in Bangladesh. The system integrates web-scraped job market data with machine learning–based salary prediction to deliver personalized career recommendations. Dedicated agents handle job data collection, cleaning, feature extraction, and career counselling using fine-tuned LLMs. Evaluated on over 5,000 real job postings, the framework effectively converts unstructured listings into actionable insights.";
var publisherDetailsLinks = `
    <em>Research Project / In Progress</em>
    <br>
    <strong style="color:red">(LLM Framework & Multi-Agent System)</strong>
    <br>
    [ <a href="#" target="_blank">Project Link / Paper</a> ]
`;
var tableRowHTML = generateTableRow(image1, image2, imageId, paperTitle, publisherDetailsLinks, descriptiom);
document.getElementById("tableBody").innerHTML += tableRowHTML;

// ==========================================
// 2. AI-Powered Competitive Programming
// ==========================================
var imageId = "ai_code_gen_image";
// 
// TODO: Replace with your actual image paths
var image1 = "images/code_gen_1.png";
var image2 = "images/code_gen_2.gif";
var paperTitle = "AI-Powered Competitive Programming Code Generation Tool Leveraging Large Language Models";
var descriptiom = "This research implements an AI-powered competitive programming assistant leveraging Large Language Models to generate, verify, and explain algorithmic solutions. The system employs an iterative pipeline integrating self-reflection, execution-based correctness verification, and pedagogical explanation generation. Fine-tuned transformer models such as Code LLaMA, StarCoder, and Mistral-7B are adapted using LoRA and trained on the APPS dataset.";
var publisherDetailsLinks = `
    <em>Research Project</em>
    <br>
    <strong style="color:red">(Fine-tuned LLMs: Code LLaMA, StarCoder, Mistral-7B)</strong>
    <br>
    [ <a href="#" target="_blank">Project Link / Paper</a> ]
`;
var tableRowHTML = generateTableRow(image1, image2, imageId, paperTitle, publisherDetailsLinks, descriptiom);
document.getElementById("tableBody").innerHTML += tableRowHTML;

// ==========================================
// 3. ClueChain
// ==========================================
var imageId = "cluechain_image";
// 

[Image of Bayesian network graph]

// TODO: Replace with your actual image paths
var image1 = "images/cluechain_1.png";
var image2 = "images/cluechain_2.gif";
var paperTitle = "ClueChain: A Bayesian Network-Based Mystery Solver Application";
var descriptiom = "ClueChain is a mystery solver application that uses Bayesian networks to solve fictional mystery scenarios. The application allows users to input various clues and evidence related to a crime and then applies Bayesian inference to calculate the probabilities of different suspects being guilty. The system provides an interactive and data-driven way to deduce the most likely suspect based on the provided evidence.";
var publisherDetailsLinks = `
    <em>Application / Research Project</em>
    <br>
    <strong style="color:red">(Bayesian Inference & Probabilistic Modeling)</strong>
    <br>
    [ <a href="#" target="_blank">Code / Demo</a> ]
`;
var tableRowHTML = generateTableRow(image1, image2, imageId, paperTitle, publisherDetailsLinks, descriptiom);
document.getElementById("tableBody").innerHTML += tableRowHTML;

// ==========================================
// 4. DiabetIQ
// ==========================================
var imageId = "diabetiq_image";
// 
// TODO: Replace with your actual image paths
var image1 = "images/diabetiq_1.png";
var image2 = "images/diabetiq_2.gif";
var paperTitle = "DiabetIQ: An Intelligent Diabetes Management Application with an Integrated LLM-Augmented RAG Chatbot and ML-Based Risk Early Prediction";
var descriptiom = "DiabetIQ is a Flutter-based intelligent diabetes management application integrating an LLM-augmented Retrieval-Augmented Generation (RAG) chatbot with a machine learning–based early risk prediction module. The chatbot provides personalized, context-aware guidance grounded in verified medical literature. In parallel, the ML component analyzes user health data to predict risks such as hypo- and hyperglycemia, enabling early intervention.";
var publisherDetailsLinks = `
    <em>Healthcare Application</em>
    <br>
    <strong style="color:red">(RAG Chatbot & Flutter Integration)</strong>
    <br>
    [ <a href="#" target="_blank">Project Link / Paper</a> ]
`;
var tableRowHTML = generateTableRow(image1, image2, imageId, paperTitle, publisherDetailsLinks, descriptiom);
document.getElementById("tableBody").innerHTML += tableRowHTML;

// ==========================================
// 5. Logic Circuit Design (IUBFALL)
// ==========================================
var imageId = "logic_design_image";
// 

[Image of 4:1 multiplexer logic diagram]

// TODO: Replace with your actual image paths
var image1 = "images/logic_1.png";
var image2 = "images/logic_2.gif";
var paperTitle = "Combinational and Sequential Logic Circuit Design to display 'IUBFALL' in a Seven-Segment Display by Using 4:1 Multiplexer";
var descriptiom = "This muxed 7-segment display project demonstrates displaying information in a limited space. Utilizing a 4:1 Multiplexer and proper hardware/software integration, this project creates an interactive display showing the sequence 'IUBFALL', proving the viability of low-cost, sequential logic design for custom display solutions.";
var publisherDetailsLinks = `
    <em>Digital Logic Design Project</em>
    <br>
    <strong style="color:red">(Hardware Implementation)</strong>
    <br>
    [ <a href="#" target="_blank">Report / Simulation</a> ]
`;
var tableRowHTML = generateTableRow(image1, image2, imageId, paperTitle, publisherDetailsLinks, descriptiom);
document.getElementById("tableBody").innerHTML += tableRowHTML;