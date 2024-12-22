document.getElementById('generateJson').addEventListener('click', () => {
    const config = {
      dialogSettings: {
        tone: {
          formal: document.getElementById('toneFormal').checked,
          casual: document.getElementById('toneCasual').checked,
          emotional: document.getElementById('toneEmotional').checked
        },
        depth: {
          philosophical: document.getElementById('depthPhilosophical').checked,
          technical: document.getElementById('depthTechnical').checked,
          balanced: document.getElementById('depthBalanced').checked
        },
        responseStyle: {
          conciseness: document.getElementById('conciseness').value,
          creativity: document.getElementById('creativity').value,
          examplesIncluded: document.getElementById('examplesIncluded').checked
        },
        language: {
          primary: document.getElementById('languagePrimary').value,
          secondary: document.getElementById('languageSecondary').value
        },
        interaction: {
          questionPriority: document.getElementById('questionPriority').checked,
          pauseBetweenTopics: document.getElementById('pauseBetweenTopics').checked,
          encourageReflection: document.getElementById('encourageReflection').checked
        },
        focus: {
          topics: document.getElementById('focusTopics').value.split(',').map(t => t.trim()),
          avoidTopics: document.getElementById('avoidTopics').value.split(',').map(t => t.trim())
        },
        personalization: {
          nameUsage: document.getElementById('nameUsage').value,
          contextAwareness: document.getElementById('contextAwareness').checked,
          preferredExamples: document.getElementById('preferredExamples').value
        }
      }
    };
  
    const outputJson = document.getElementById('outputJson');
    outputJson.textContent = JSON.stringify(config, null, 2);
    document.getElementById('outputSection').classList.remove('hidden');
  });
  
  document.getElementById('copyToClipboard').addEventListener('click', () => {
    const jsonText = document.getElementById('outputJson').textContent;
    navigator.clipboard.writeText(jsonText).then(() => {
      alert('JSON copied to clipboard!');
    });
  });
  