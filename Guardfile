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
             all_on_start: true,
             load_paths: ['_assets/components',
                          '_assets/components/bootstrap-sass/assets/stylesheets',
                          '_assets/components/font-awesome/scss'] do
  watch('_assets/stylesheets/public.scss')
  watch('_assets/stylesheets/sticky-footer.scss')
  watch('_assets/stylesheets/sticky-footer-ie.scss')
  watch('_assets/stylesheets/home.scss')
end

guard :sprockets, destination: 'assets/javascripts',
                  asset_paths: ['_assets/javascripts',
                                '_assets/javascripts/vendor',
                                '_assets/components/jquery/dist',
                                '_assets/components/bootstrap-sass/assets/javascripts'],
                  root_file: ['assets/javascripts/public.js',
                              'assets/javascripts/vendor/bigvideo.js'],
                  minify: true do
  watch(%r{^_assets/javascripts/(.*)\.js$})
end

guard :copy, from: '_assets/fonts',
             to: 'assets/fonts',
             mkpath: true,
             delete: true,
             run_at_start: true do
  watch(%r{^_assets/fonts/.+$})
end

guard :copy, from: '_assets/components/font-awesome/fonts',
             to: 'assets/fonts',
             mkpath: true,
             delete: true,
             run_at_start: true do
  watch(%r{^_assets/components/font-awesome/fonts/.+$})
end
