import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  // Write a test where we test whether the posts are being rendered correctly
  //   test('renders posts if request succeeds', () => {
  //     // Arrange - Setup the test data, test conditions and test environment
  //     render(<Async />);

  //     // Act - Run logic that should be tested
  //     // Fetch and setPosts automatically Act is not required

  //     // Assert - Compare execution results with expected results
  //     // Check if list items were rendered because we noted that if list items were rendered posts were fetched correctly because otherwise no list items would have been rendered.

  //     //   If list items were rendered
  //     //   Since list item is a role HTML elements
  //     //   screen.getByRole()
  //     //   Select list item elements
  //     //   Array of HTML elements
  //     const listItemElements = screen.getAllByRole('listitem');
  //     //   Expectation is now would be that list item elements array is not empty because if this array of items is empty we know that no items were rendered, and that of course is not the desired result.
  //     // The method toHaveLength() allow us to check the length of an array
  //     // But the initial render cycle does not have list items because there are no posts initially, because fetching that post data takes a couple of milliseconds or seconds.
  //     expect(listItemElements).not.toHaveLength(0);
  //     // Unable to find an accessible element with the role "listitem"

  //     // Express expectation
  //   });

  test('renders posts if request succeeds', async () => {
    // Arrange - Setup the test data, test conditions and test environment
    render(<Async />);

    // Act - Run logic that should be tested
    // Fetch and setPosts automatically Act is not required

    // Assert - Compare execution results with expected results
    // Check if list items were rendered because we noted that if list items were rendered posts were fetched correctly because otherwise no list items would have been rendered.

    //   If list items were rendered
    //   Since list item is a role HTML elements
    //   screen.getByRole()
    //   Select list item elements
    //   Array of HTML elements
    const listItemElements =  await screen.findAllByRole('listitem');
    //   Expectation is now would be that list item elements array is not empty because if this array of items is empty we know that no items were rendered, and that of course is not the desired result.
    // The method toHaveLength() allow us to check the length of an array
    // But the initial render cycle does not have list items because there are no posts initially, because fetching that post data takes a couple of milliseconds or seconds.
    //   And that's our problem here. With get all by role, we immediately get all these items on the screen, and initially there are none. Now, there is a simple work around, though. Instead of get all by role, you can use find all by role. The difference is that find all by role or in general, those find queries which you can use instead of the get queries, these queries return a promise. Here you get back a promise, and actually react testing library will basically reevaluate the screen a couple of times until this succeeds. So therefore now, this will then wait for this HTTP request to succeed. For find all by role, you can also specify a third argument. The second argument allows you to set exact and so on. The third argument is another object where you can set that timeout period. The default here is one second. So if your items are not there after one second, this would still fail. Here, the default of one second shuts of flies, and now we do fetch those items after one second at most. And most importantly, we don't just look at the rendered component immediately, but we wait to see if we can find that item at a later point of time. Now, I'm getting some red squiggly lines here because since this returns a promise, we should await this before we work on the result, because the result here is a promise, not an array. Thankfully, your test code can be async. You can add the async keyword here. So put in our words, your test here can actually return a promise. And then jest, our test runner, will wait for this promise to resolve. So it will wait until your test is already done. And now therefore here we should add the await keyword. Now, this here is an array, and now this hopefully succeeds. If I now save this, the test runs again, and now we see that we get this success output here. We are able to successfully render those posts. And now I reran all my tests by pressing a again, and you'll see all tests passed here.So this works, but this actually is still not ideal.
    expect(listItemElements).not.toHaveLength(0);
    // Unable to find an accessible element with the role "listitem"

    // Express expectation
  });
});
