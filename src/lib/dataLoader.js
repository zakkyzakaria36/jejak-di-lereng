export async function loadCSV(filename) {
  try {
    const response = await fetch(`/data/${filename}`);
    const text = await response.text();
    
    const lines = text.trim().split('\n');
    const headers = lines[0].split(',');
    
    const data = lines.slice(1).map(line => {
      const values = line.split(',');
      const obj = {};
      headers.forEach((header, index) => {
        obj[header.trim()] = values[index]?.trim() || '';
      });
      return obj;
    });
    
    return data;
  } catch (error) {
    console.error(`Error loading ${filename}:`, error);
    return [];
  }
}
