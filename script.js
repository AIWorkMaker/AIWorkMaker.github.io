var data = {
        "1": {
          "Math": ["What is 2+3? : 5", "What is 5-2? : 3", "What is 8+9? : 17"],
          "Reading": {
              "Questions": ["What is the main character's name? : John", "What is the story about? : A boy who finds a treasure", "What is the climax of the story? : The boy finds the treasure"],
              "Extract":"John was walking through the forest when he stumbled upon an old treasure chest. He couldn't believe his luck, he had always dreamed of finding a treasure. Excitedly, he opened the chest to find it filled with gold and jewels. This was the best day of his life."
          }
        },
        "2": {
          "Math": ["What is 3*4? : 12", "What is 6/2? : 3", "What is 12-5? : 7"],
          "Reading": {
              "Questions": ["What is the setting of the story? : In a forest", "What is the main theme? : Friendship", "What is the resolution of the story? : The friends solved the problem together"],
              "Extract":"Jane and her friends were lost in the forest. They had been hiking all day and couldn't find their way back to the trail. As the sun began to set, they decided to make camp for the night and try to find their way back in the morning."
          }
        },
        "3": {
          "Math": ["What is 4*5? : 20", "What is 8/2? : 4", "What is 16-9? : 7"],
          "Reading": {
              "Questions": ["What is the main character's goal? : To save the kingdom", "What is the conflict in the story? : The main character must defeat the evil sorcerer", "What is the resolution of the story? : The main character defeats the sorcerer and saves the kingdom"],
              "Extract":"The kingdom was in danger, the evil sorcerer was planning to take over. The only person who could stop him was the brave knight. He set off on a quest to find the sorcerer's lair and put an end to his evil plans."
          }
        }
        // Add more years and subjects
      };
      function updateHomework() {
        var year = document.getElementById("yearSelect").value;
        var subject = document.getElementById("subjectSelect").value;
        var question = data[year][subject].Questions[Math.floor(Math.random() * data[year][subject].Questions.length)];
        document.getElementById("question").innerHTML = question.split(":")[0];
        document.getElementById("answer").innerHTML = "Answer: " + question.split(":")[1];
        document.getElementById("story").innerHTML = data[year][subject].Extract;
      }
