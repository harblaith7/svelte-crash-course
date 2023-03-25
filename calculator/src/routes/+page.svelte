<script lang="ts">
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
  const operations = ["/", "x", "-", "+", "="];

  let selectedFirstNumber = "";
  let selectedSecondNumber = "";
  let selectedOperation = "";
  let displayingResults = false;

  let display = "";

  const handleNumberClick = (number: string) => {
    if (displayingResults) {
      handleClear();
    }
    if (number === "0" && display === "") return;

    if (number === "." && display.includes(".")) return;

    if (!selectedOperation) {
      if (number === "." && display === "") {
        selectedFirstNumber = `0.`;
        return (display = selectedFirstNumber);
      }
      selectedFirstNumber = `${selectedFirstNumber}${number}`;
      display = selectedFirstNumber;
    } else {
      if (number === "." && display === "") {
        selectedSecondNumber = `0.`;
        return (display = selectedSecondNumber);
      }

      selectedSecondNumber = `${selectedSecondNumber}${number}`;
      display = selectedSecondNumber;
    }
  };

  const handleClear = () => {
    selectedFirstNumber = "";
    selectedSecondNumber = "";
    selectedOperation = "";
    display = "";
    displayingResults = false;
  };

  const handleOperationClick = (operation: string) => {
    if (!selectedFirstNumber) return;
    if (operation === "=") {
      const firstNumber = parseInt(selectedFirstNumber);
      const secondNumber = parseInt(selectedSecondNumber);
      let results = "";
      switch (selectedOperation) {
        case "/":
          results = (firstNumber / secondNumber).toFixed(2);
          break;
        case "x":
          results = (firstNumber * secondNumber).toFixed(2);
          break;
        case "+":
          results = (firstNumber + secondNumber).toFixed(2);
          break;
        case "-":
          results = (firstNumber - secondNumber).toFixed(2);
          break;
      }

      display = results;
      return (displayingResults = true);
    }
    selectedOperation = operation;
  };
</script>

<main>
  <div class="calculator">
    <div class="results">{display}</div>
    <div class="digits">
      <div class="numbers">
        <button class="number-btn number-btn-xlg" on:click={handleClear}
          >C</button
        >
        {#each numbers as number (number)}
          {#if number !== "0"}
            <button
              class="number-btn"
              on:click={() => handleNumberClick(number)}>{number}</button
            >
          {:else}
            <button
              class="number-btn number-btn-lg"
              on:click={() => handleNumberClick(number)}>{number}</button
            >
          {/if}
        {/each}
      </div>
      <div class="operations">
        {#each operations as operation (operation)}
          {#if selectedOperation === operation}
            <button
              class="number-btn number-btn-silver"
              on:click={() => handleOperationClick(operation)}
              >{operation}</button
            >
          {:else}
            <button
              class="number-btn number-btn-orange"
              on:click={() => handleOperationClick(operation)}
              >{operation}</button
            >
          {/if}
        {/each}
      </div>
    </div>
  </div>
</main>

<style>
  main {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .calculator {
    background-color: rgb(28, 28, 28);
    width: 240px;
    padding: 15px;
    border-radius: 7px;
  }

  .digits {
    display: flex;
  }

  .operations {
    display: flex;
    flex-direction: column;
  }

  .numbers {
    display: flex;
    flex-wrap: wrap;
    width: 200px;
  }

  .number-btn {
    width: 50px;
    height: 50px;
    border-radius: 100px;
    background-color: rgb(114, 113, 113);
    font-size: 20px;
    font-weight: bold;
    color: white;
    margin: 5px;
    border: none;
    cursor: pointer;
  }

  .number-btn-lg {
    width: 110px;
  }

  .number-btn-orange {
    background-color: orange;
  }

  .number-btn-silver {
    background-color: silver;
  }

  .number-btn-xlg {
    width: 170px;
  }

  .results {
    height: 60px;
    color: white;
    font-size: 50px;
    display: flex;
    flex-direction: row-reverse;
    margin-right: 10px;
  }
</style>
