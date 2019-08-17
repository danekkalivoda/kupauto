
module Jekyll
  class Page
    def url_placeholders
      {
        path:         @dir,
        basename:     I18n.transliterate(basename.force_encoding('UTF-8')).downcase.gsub(' ', '-'),
        output_ext:   output_ext,
      }
    end
  end
end