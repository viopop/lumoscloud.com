guard :copy, from: '_assets/images',
             to: 'assets/images',
             mkpath: true,
             delete: true,
             run_at_start: true do
  watch(%r{^_assets/images/.+$})
end

guard :copy, from: '_assets/videos',
             to: 'assets/videos',
             mkpath: true,
             delete: true,
             run_at_start: true do
  watch(%r{^_assets/videos/.+$})
end

guard :sass, output: 'assets/stylesheets',
             style: :compressed,
             all_on_start: true do
  watch('_assets/stylesheets/public.scss')
  watch('_assets/stylesheets/sticky-footer.scss')
  watch('_assets/stylesheets/sticky-footer-ie.scss')
  watch('_assets/stylesheets/home.scss')
end

guard :sprockets, destination: 'assets/javascripts',
                  asset_paths: ['_assets/javascripts', '_assets/javascripts/vendor'],
                  root_file: ['assets/javascripts/public.js', 'assets/javascripts/vendor/bigvideo.js'],
                  minify: true do
  watch(%r{^_assets/javascripts/(.*)\.js$})
end
