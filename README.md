# The Introverted Developer

The Introverted Developer blog was created with one goal in mind, to become a hub for introverted developers to share stories, tips and advice for how to succeed in an otherwise extroverted industry.

## Writing an article

Our prefered method of accepting an article is via a GitHub pull request as this way we can easily review the article and merge it into the website quickly. 

When creating a pull request, please follow this process:

1. [Fork](http://help.github.com/fork-a-repo/) the repository, clone your fork,
   and configure the remotes:

   ```bash
   # Clone your fork of the repo into the current directory
   git clone https://github.com/<your-username>/theintdev.github.io
   # Navigate to the newly cloned directory
   cd theintdev.github.io
   # Assign the original repo to a remote called "theintdev"
   git remote add theintdev https://github.com/theintdev/theintdev.github.io
   ```

2. If you cloned a while ago, get the latest changes from the int dev repository:

   ```bash
   git checkout master
   git pull theintdev master
   ```

3. Create a new article branch (off the main project `master` branch) to
   contain your article:

   ```bash
   git checkout -b article/<article-name>
   ```

4. Create your draft article inside to `_drafts` folder using the following blue print:

   ```yaml
    ---
    layout: post
    title: <article-title>
    image: <article-image>

    author:
        name: <your-name>
        avatar: <your-avatar>
        twitter: <your-twitter-handle>
        url: <your-url>
        bio: <your-bio>
    ---

    Your markdown content goes here
   ```

   **NB** Only the title, image and author name front matter are required

5. Add any media assets used by your article into an article specific sub folder inside the root `media` folder. Images    should be no greater then 1000px in any given dimension.

7. Push your topic branch up to your fork:

   ```bash
   git push origin article/<article-name>
   ```

8. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/)
    with a clear title and description.

Pull requests should only contain a single article submission. If you wish to submit multiple articles, you should submit these as individual pull requests.

If you are uncomfortable with creating a pull request, feel free to [email us](mailto:hi@theintdev.com) a google doc or similar.

## Suggesting a topic

Topic suggestions or questions should be submitted via the [Issue Tracker](https://github.com/theintdev/theintdev.github.io/issues) and be labeled with either the `topic suggestion` or `question` label.

## Reporting website issues

Website issue should be submitted via the [Issue Tracker](https://github.com/theintdev/theintdev.github.io/issues) and be labeled with the `website bug` label.

Pull requests for content issues are also welcomed.