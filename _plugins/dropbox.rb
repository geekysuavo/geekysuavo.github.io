module Jekyll
  class DropboxTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @path = text
      @text = File.basename(text)
      @base = "https://dl.dropboxusercontent.com/u/49207495/site"
    end

    def render(context)
      "[#{@text}](#{@base}/#{@path})"
    end
  end
end

Liquid::Template.register_tag('dropbox', Jekyll::DropboxTag)
