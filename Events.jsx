import { useState } from "react";

export default function Events() {
  const [inputValue, setInputValue] = useState("");
  const [log, setLog] = useState("Try an event above to see the result here.");

  // Event handlers with logs
  const handleClick = () => setLog("✅ Button clicked!");
  const handleChange = (e) => {
    setInputValue(e.target.value);
    setLog(`✏️ Input changed: ${e.target.value}`);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLog("📨 Form submitted!");
  };
  const handleMouseEnter = () => setLog("🖱️ Mouse entered the box.");
  const handleMouseLeave = () => setLog("🚪 Mouse left the box.");
  const handleKeyDown = (e) => setLog(`⌨️ Key pressed: ${e.key}`);
  const handleFocus = () => setLog("🔍 Input focused.");
  const handleBlur = () => setLog("🔕 Input blurred.");
  const handleDoubleClick = () => setLog("✅ Button double-clicked!");
  const handleCopy = () => setLog("📋 Text copied.");
  const handleCut = () => setLog("✂️ Text cut.");
  const handlePaste = () => setLog("📎 Text pasted.");
  const handleSelect = () => setLog("🔸 Text selected.");
  const handleInput = (e) => setLog(`🔁 Input event: ${e.target.value}`);

  return (
    <div className="p-6 space-y-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">
        ⚡ React Events Playground
      </h1>

      {/* Click Event */}
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Click Me
      </button>

      {/* Change Event */}
      <input
        type="text"
        onChange={handleChange}
        placeholder="Type something..."
        className="block w-full p-2 border rounded"
      />

      {/* Submit Event */}
      <form onSubmit={handleSubmit} className="space-x-2">
        <input
          type="text"
          placeholder="Enter name"
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Submit
        </button>
      </form>

      {/* Mouse Events */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="p-4 border border-dashed text-center"
      >
        Hover over me (Mouse Events)
      </div>

      {/* Keyboard Events */}
      <input
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="Press a key"
        className="block w-full p-2 border rounded"
      />

      {/* Focus and Blur Events */}
      <input
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Focus / Blur"
        className="block w-full p-2 border rounded"
      />

      {/* Double Click Event */}
      <button
        onDoubleClick={handleDoubleClick}
        className="px-4 py-2 bg-purple-600 text-white rounded"
      >
        Double Click Me
      </button>

      {/* Clipboard Events */}
      <input
        type="text"
        onCopy={handleCopy}
        onCut={handleCut}
        onPaste={handlePaste}
        placeholder="Copy / Cut / Paste"
        className="block w-full p-2 border rounded"
      />

      {/* Select Event */}
      <textarea
        onSelect={handleSelect}
        defaultValue="Try selecting this text!"
        className="block w-full p-2 border rounded"
      />

      {/* Input Event */}
      <input
        type="text"
        onInput={handleInput}
        placeholder="Typing input..."
        className="block w-full p-2 border rounded"
      />

      {/* Display Area */}
      <div className="mt-6 p-4 bg-gray-100 border rounded text-sm">
        <strong>🧾 Event Log:</strong>
        <p>{log}</p>
      </div>

      <p className="text-xs text-gray-500 text-center">
        Current Input Value: {inputValue}
      </p>
    </div>
  );
}
