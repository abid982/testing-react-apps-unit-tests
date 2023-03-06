// Now, any here, we write a test by using this test function, which is globally available.
// You don't need to import it, it's available like this.
// And then as we saw, we give this test a description. Now the text here is up to you, but generally you wanna briefly describe what your tests does. And here I wanna test whether we have the hello world text on the screen. So of course that's quite similar to what we tested in App.test.js before, but we will get more fancy later.
// So here I'll just say, "renders Hello World as a text." Then we need to add a second argument to this test function, which is an anonymous function, which will contain the actual testing code.
// Now in here, we typically wanna do three things when we write a test.We wanna write a test by using the three A's. The first A stands for arrange. We wanna set up our tests. For example, we wanna render the component which we wanna test. We can also do additional setup work if it's required. Then we wanna act. So we wanna do the thing, which we wanna actually test. For example, if we wanna simulate a button click, we want to do that as a second step. It's not something we do here but it is something that you often will do in some tests, and it is something which we also will do later. Last but not least, we want to assert the results. So we wanna have a look at the output that's visible in the browser, for example and then see if that matches our expectations. So these are our three A's.

// Render Greeting Component
// Import Component that we do wanna test

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

// test('renders Hello World as a text', () => {
//   // And then we can call render, which you need to import from testing-libraries/react and you then render your component. Now we could do more here if more is required, but here, that's all we need.

//   // Arrange
//   // Render your component
//   render(<Greeting />);

//   // Then we want to act. We want to perform the main action that's interesting to us. And here that's basically nothing.

//   // Act
//   // ... nothing

//   // Last but not least, we wanna assert and for that, I wanna look into that virtual DOM, if you want to call it like this, so that rendered component content. And since I want to test whether hello world is rendered as a text, I want to select an element by that text. And if we find such an element we know that the test succeeded. For this, we can import screen, which gives us access to this, a virtual screen to this virtual DOM, which was rendered if you want to call it like that and we can use that screen to then find elements on that screen. Now for this, you've got various functions available. You've get functions, find functions and query functions. The main difference is when these functions throw errors and if they return a promise or not. Get functions, will for example, throw an error if an element is not found, query functions won't do that and find functions will return a promise. So there it's enough if an element is eventually on the screen. Here, I will get an element by text. So we'll use screen get by text. And then here we need to define the texts for which we're looking. Now, here, we can use a regular expression as it was the case in App.test.js, but you can also just, hard-code a string. It's just a little bit less flexible than a regular expression.
//   // But if you are looking for a full string as I'm doing it here, then it's absolutely fine. You can also pass a second argument here to get by text and configure if you want an exact match, which is the default or not. If you say false here, casing won't matter for example, and it will also match sub-strings.

//   // Now here, an exact match is okay though, and since that's the default we don't need to do anything else. Now get by text will hopefully return an element.

//   // If it doesn't find an element, it will throw an error. And therefore here I'll then get my Hello World element. And now we can make the actual assertion. We can check whether that element exists. For this we got the globally available expect function to which we can pass our testing result value and that can be anything, a number, a string or like in this case, a DOM Node in the end, an HTML Element. And then on this result of this expect function, we've got various matrix, like this to be in the document function which checks whether the thing we expect here, the HTML element we expect here is in the document. You can also check for opposites by adding dot not and then your matching functions like not to be in the document. If you want this element not to be in the document though, in that case you would have to use the query by a text function, since get by text would fail if no element would be found. But that's not what I wanna check here. Anyways, I just wanna check if this is in the document. So basically the same test as we had it, an App.test.js and that's now our first dummy test.

//   // If we now run npm test again, this will start up the testing again and now it also does run all these tests out of the box and you see that we got two tests and actually both failed. Now, App.test.js failed because as we see here, we must at least have one test, and that's an empty file right now.So therefore, to avoid this error, I will delete App.test.js. Now it re-runs, but the other test here also fails because it's unable to find an element with that text, Hello World. And the reason for that is that here I have an exclamation mark. And I did mention that it looks for an exact match here out of the box. So we either add exact false here to be a bit more forgiving, in which case does test now passes as you see, or we look for the exact match by adding the exclamation mark here, in which case it also passes. But this is now how we can write our own first test even though it's basically the same as before but we learn how we can generally write our tests and with that knowledge, we can now dive a bit deeper.

//   // Assert
//   // screen.getByText('Hello World', { exact: true})

//   const helloWorldElement = screen.getByText('Hello World!');
//   // Globally available function
//   //   expect(helloWorldElement).not.toBeInTheDocument();

//   expect(helloWorldElement).toBeInTheDocument();
// });

/*
Now with our first custom tests written, before we write more tests, let's talk about this tests suites vs. tests thing. As your application grows, you typically will have dozens or maybe hundreds or thousands of tests and to organize and group those different tests, you often organize them into different testing suites. For example, all the tests, belonging to one feature, or one component of your application, could be grouped into one testing suite, and you create such a testing suite, by using the global "describe" function. Just like "test," that's a globally available function. You also give these two arguments, where the first argument is a description and this is a description of this category to which your different tests will then belong, and here it could be "Greeting," like this, or "Greeting component" to make it clear that we're talking about the tests, belonging to the "Greeting component." Then you have a second argument, which also is an anonymous function here. But in this function you don't write the testing code itself, but you put your different tests in there. So we kept this test and added in this function. And now we've got one suite with one test and we can have multiple suites and we can also have multiple tests per suite. So if I now saved this, you see that we still have this description text, but it's grouped below this testing group name, this testing suite name and you see that we have one testing suite and one test The same as before because if we have no explicitly set suite, we get one automatically. But now, we do have our own clearly labeled suite, which is a good idea. As your application grows you definitely want to group your tests like this.
*/

describe('Greeting Component', () => {
  test('renders "Hello World" as a text', () => {
    // Arrange
    // Render your component
    render(<Greeting />);

    // Then we want to act. We want to perform the main action that's interesting to us. And here that's basically nothing.

    // Act
    // ... nothing

    // Assert
    // screen.getByText('Hello World', { exact: true})

    const helloWorldElement = screen.getByText('Hello World!');
    // Globally available function
    //   expect(helloWorldElement).not.toBeInTheDocument();

    //   Assert
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders "good to see you" if the button was NOT clicked', () => {
    //   Arrange
    render(<Greeting />);

    // Then we want to act. We want to perform the main action that's interesting to us. And here that's basically nothing.

    // Act
    // ... nothing

    //   Assert
    const paragraphElement = screen.getByText('good to see you', {
      exact: false,
    });

    // Our expectation is that this element exists in the DOM so that we'll able to find an element with that test.
    expect(paragraphElement).toBeInTheDocument();
  });

  // Test when the button is clicked and see our expectation
  test('renders "Changed" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // We wanna click button
    // Now for this, we can import another feature from another package, which also was installed out of the box, from the testing library user event package, to be precise.

    // From there, I want to import userEvent just like this. So from @testing-library user event. User event is an object that helps us trigger user events in this virtual screen. We can simply use user event, and then there, we got all these typical events which we can perform like clicking, double clicking, hovering, typing into inputs.
    //   Here we of course need a click. And click then needs one argument at least. It needs the element on which you want to simulate a click. And in my case that's, of course, this button here. We can select this button again by text but we can also select it differently and to mix things up, I'll show you that alternative.We can, again, use the screen here and get this element by role. We can get it by role, and button is a role elements can have on the screen. And since I only have one button here that will give me access to this one button I have here.

    const buttonElement = screen.getByRole('button');
    //   You could select button by text
    userEvent.click(buttonElement);

    // Assert
    const paragraphElement = screen.getByText('Changed!');
    expect(paragraphElement).toBeInTheDocument();
  });
  // First paragraph is gone if we click the button
  test('does not render "good to see you" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    //   Note: Now getByText() will fail if an element is not found and here is my expectation is actually that it's not found. So here we should write not to be in the document. But again it will throw an error if it's not found, this test could never pass if the element is not found even though that is what we want. So that's then a reason for using query by text
    // It returns null if the element is not found
    const paragraphElement = screen.queryByText('good to see you', {
      exact: false,
    });

    // expect(paragraphElement).not.toBeInTheDocument();
    // expect(paragraphElement).not.toBeInTheDocument();
    expect(paragraphElement).toBeNull();
  });
});
